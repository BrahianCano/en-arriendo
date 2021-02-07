// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const jsonDB = [
    {
        title: "Propiedad 1",
        subtitle: "Subtitle 1",
        url: "https://enarriendo.vercel.app/1"
    },
    {
        title: "Propiedad 2",
        subtitle: "Subtitle 2",
        url: "https://enarriendo.vercel.app/2"
    },
    {
        title: "Propiedad 3",
        subtitle: "Subtitle 3",
        url: "https://enarriendo.vercel.app/3"
    },
    {
        title: "VENTA APARTAMENTO MEDELLIN LAURELES NUTIBARA CERCA A BULERIAS",
        subtitle: "Subtitle 4",
        url: "https://enarriendo.vercel.app/4"
    }
]

export default (req, res) => {
    res.statusCode = 200
    res.json(jsonDB)
}
