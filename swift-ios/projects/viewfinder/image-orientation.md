# Image Orientation

If your images are sideways or upside-down, you probably aren't alone! We can fix this by implementing an ImageUtilities class, a chunk of code someone else wrote. Unlike Apple classes we've inherited from, we have to manually add the code into our project. Follow the directions below to implement this.

### Build an `ImageUtilities` class

* Add a new `Swift` file: File ➡ New ➡ File ➡ iOS ➡ Swift File ➡ Click `Next` ➡ name the dile `ImageUtilities`

* Copy and paste the following code into that file. It's not important that you understand this, but you can feel free to read through it if you are interested! It will essentially check the orientation of an image and change that orientation if it isn't currently presented as it was originally taken.

```swift
import UIKit

class ImageUtilities {

    public static func fixImageOrientation(imageSource : UIImage, maxResolution : CGFloat = 320) -> UIImage? {

        guard let imgRef = imageSource.cgImage else {
            return nil
        }

        let width = CGFloat(imgRef.width)
        let height = CGFloat(imgRef.height)

        var bounds = CGRect(x: 0, y: 0, width: width, height: height)

        var scaleRatio : CGFloat = 1
        if (width > maxResolution || height > maxResolution) {

            scaleRatio = min(maxResolution / bounds.size.width, maxResolution / bounds.size.height)
            bounds.size.height = bounds.size.height * scaleRatio
            bounds.size.width = bounds.size.width * scaleRatio
        }

        var transform = CGAffineTransform.identity
        let orient = imageSource.imageOrientation
        let imageSize = CGSize(width: CGFloat(imgRef.width), height: CGFloat(imgRef.height))

        switch(imageSource.imageOrientation) {
        case .up:
            transform = .identity
        case .upMirrored:
            transform = CGAffineTransform
                .init(translationX: imageSize.width, y: 0)
                .scaledBy(x: -1.0, y: 1.0)
        case .down:
            transform = CGAffineTransform
                .init(translationX: imageSize.width, y: imageSize.height)
                .rotated(by: CGFloat.pi)
        case .downMirrored:
            transform = CGAffineTransform
                .init(translationX: 0, y: imageSize.height)
                .scaledBy(x: 1.0, y: -1.0)
        case .left:
            let storedHeight = bounds.size.height
            bounds.size.height = bounds.size.width;
            bounds.size.width = storedHeight;
            transform = CGAffineTransform
                .init(translationX: 0, y: imageSize.width)
                .rotated(by: 3.0 * CGFloat.pi / 2.0)
        case .leftMirrored:
            let storedHeight = bounds.size.height
            bounds.size.height = bounds.size.width;
            bounds.size.width = storedHeight;
            transform = CGAffineTransform
                .init(translationX: imageSize.height, y: imageSize.width)
                .scaledBy(x: -1.0, y: 1.0)
                .rotated(by: 3.0 * CGFloat.pi / 2.0)
        case .right :
            let storedHeight = bounds.size.height
            bounds.size.height = bounds.size.width;
            bounds.size.width = storedHeight;
            transform = CGAffineTransform
                .init(translationX: imageSize.height, y: 0)
                .rotated(by: CGFloat.pi / 2.0)
        case .rightMirrored:
            let storedHeight = bounds.size.height
            bounds.size.height = bounds.size.width;
            bounds.size.width = storedHeight;
            transform = CGAffineTransform
                .init(scaleX: -1.0, y: 1.0)
                .rotated(by: CGFloat.pi / 2.0)
        }

        UIGraphicsBeginImageContext(bounds.size)
        if let context = UIGraphicsGetCurrentContext() {
            if orient == .right || orient == .left {
                context.scaleBy(x: -scaleRatio, y: scaleRatio)
                context.translateBy(x: -height, y: 0)
            } else {
                context.scaleBy(x: scaleRatio, y: -scaleRatio)
                context.translateBy(x: 0, y: -height)
            }

            context.concatenate(transform)
            context.draw(imgRef, in: CGRect(x: 0, y: 0, width: width, height: height))
        }

        let imageCopy = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()

        return imageCopy
    }


}

extension UIImage {

    func createThumbnail() -> UIImage{
        let ratio = self.size.width / self.size.height
        return self.scaleImage(toSize: CGSize(width: 100, height: 100 / ratio))!
    }

    func scaleImage(toSize newSize: CGSize) -> UIImage? {
        let newRect = CGRect(x: 0, y: 0, width: newSize.width, height: newSize.height).integral
        UIGraphicsBeginImageContextWithOptions(newSize, false, 0)
        if let context = UIGraphicsGetCurrentContext() {
            context.interpolationQuality = .high
            let flipVertical = CGAffineTransform(a: 1, b: 0, c: 0, d: -1, tx: 0, ty: newSize.height)
            context.concatenate(flipVertical)
            context.draw(self.cgImage!, in: newRect)
            let newImage = UIImage(cgImage: context.makeImage()!)
            UIGraphicsEndImageContext()
            return newImage
        }
        return nil
    }
}
```

* Now, that `ImageUtilities` class won't magically work. In the `AddPhotoViewController`, we need to add one line of code and change one line of code. In your `imagePickerController` you currently have something like this:

```swift
if let selectedImage =  info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
    photoToSave.image = selectedImage
}
```

Before we assign the `selectedImage` to the `photoToSave.image`, we need to "fix" it:

```swift
if let selectedImage =  info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
    let fixedImaged = ImageUtilities.fixImageOrientation(imageSource: selectedImage)
    photoToSave.image = fixedImaged
}
```

> Now, re-run your application

* You'll see that pictures you saved before this will still be sideways or upside-down because they were stored that way. Add a new picture and check its orientation - it should be correct!
