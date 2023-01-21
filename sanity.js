import sanityClient from '@sanity/client'
import sanityUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: '0n1h9y4h',
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-03-25',
})

const builder = sanityUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client