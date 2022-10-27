import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const PROJECT_ID = process.env.REACT_APP_SANITY_PROJECT_ID
const DATASET = 'production'
export const client = sanityClient({
    projectId: PROJECT_ID,
    dataset:DATASET,
    apiVersion: '2022-09-15',
    useCdn: true,
    token:process.env.REACT_APP_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const getUrlFromId =( ref )=> {
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`
  }

export const urlFor = (source) => builder.image(source);

