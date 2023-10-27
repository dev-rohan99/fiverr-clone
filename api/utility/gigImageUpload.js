import cloudinary from "cloudinary";


/**
 * gig photos upload
 * @param {*} images 
 * @returns 
 */

export const gigPhotosUpload = async (images) => {
    try {
        // Configuration 
        cloudinary.config({
          cloud_name: "db31ne0yv",
          api_key: "331148642149157",
          api_secret: "f-PQp1POsQb5Uq3tuqQEhm3wweg"
        });
    
        const urls = [];
    
        for (const image of images) {
          const res = await cloudinary.uploader.upload(image, {
            folder: "fiverr/gig",
            public_id: "fiverr/gig/gigImage"
          });
    
          urls.push(res.secure_url);
        }
    
        return urls;
    } catch (error) {
        throw error;
    }
}

/**
 * gig cover photo upload
 * @param {*} image 
 * @returns 
 */

export const gigCoverPhotoUpload = async (image) => {
    try {
        // Configuration 
        cloudinary.config({
          cloud_name: "db31ne0yv",
          api_key: "331148642149157",
          api_secret: "f-PQp1POsQb5Uq3tuqQEhm3wweg"
        });
    
        const res = await cloudinary.uploader.upload(image, {
            folder: "fiverr/gig",
            public_id: "fiverr/gig/gigCoverImage"
        });

        return res.secure_url;
    
    } catch (error) {
        throw error;
    }
}

