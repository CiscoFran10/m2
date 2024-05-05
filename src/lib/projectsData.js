const Cover1 = "/project-1.avif";
const Cover2 = "/project-2.avif";
const Cover3 = "/project-3.avif";
const Cover4 = "/project-4.avif";
const Cover5 = "/project-5.avif";
const GalleryExample1 = "/gallery-example1.png";
const GalleryExample2 = "/gallery-example2.png";
const GalleryExample3 = "/gallery-example3.png";

const projectsList = [
    {
        title: "Projeto 1",
        endpoint: "projeto-1",
        description: "Descrição do Projeto 1",
        emphasisContent: true,
        coverImage: Cover1,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "business",
        locationType: "INTERIOR"
    },
    {
        title: "Projeto 2",
        endpoint: "rojeto-2",
        description: "Descrição do Projeto 2",
        emphasisContent: true,
        coverImage: Cover2,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "residential",
        locationType: "INTERIOR"
    },
    {
        title: "Projeto 3",
        endpoint: "rojeto-3",
        description: "Descrição do Projeto 3",
        emphasisContent: false,
        coverImage: Cover3,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "residential",
        locationType: "INTERIOR",
    },
    {
        title: "Projeto 4",
        endpoint: "rojeto-4",
        description: "Descrição do Projeto 4",
        emphasisContent: true,
        coverImage: Cover4,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "residential",
        locationType: "EXTERIOR",
    },
    {
        title: "Projeto 5",
        endpoint: "rojeto-5",
        description: "Descrição do Projeto 5",
        emphasisContent: false,
        coverImage: Cover5,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "business",
        locationType: "EXTERIOR",
    },
    {
        title: "Projeto 6",
        endpoint: "rojeto-6",
        description: "Descrição do Projeto 6",
        emphasisContent: false,
        coverImage: Cover1,
        gallery: [GalleryExample1, GalleryExample2, GalleryExample3],
        category: "business",
        locationType: "EXTERIOR",
    },
];

export default projectsList;
