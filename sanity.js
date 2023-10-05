import { createClient } from "@sanity/client"
import urlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: '6dzece4w',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = urlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;