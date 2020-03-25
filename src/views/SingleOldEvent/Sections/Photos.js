const getImages = (path) =>{
    let ImageArray = []
    for(let i = 1; i <= 20; i++ ){
        try {
            ImageArray.push(require('../../../'+path+'/image'+i+'.jpg'))
        } catch (error) {
            break;
        }
    }
    return(ImageArray) 

}

export default getImages;