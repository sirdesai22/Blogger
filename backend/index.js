import express from "express";
const app = express();
import cors from 'cors'
app.use(cors())
import bodyParser from 'body-parser'
app.use(bodyParser.json()) 

const PORT = 3000;

var blogs = [
  {
    title: 'Hello World', 
    description: 'Lorem ipsum dolor sit amet lore m arranged in a circle of white that flows towards the center of the world and then enters.'
  },
  {
    title: 'Kem Cho', 
    description: 'Lorem ipsum dolor sit amet lore m arranged in a circle of white that flows towards the center of the world and then enters HEllo world 22.'
  }
]


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/allblogs", (req, res) => {
  res.json(blogs);
})

app.post("/newblog", (req, res) => {
  const formData = req.body;

  // Do something with the formData
  // console.log("Received data:", formData);
  blogs.push(formData)

  // Send a response (adjust as needed)
  res.status(200).json({ message: "Data received successfully" });
});

app.get('/:title', (req, res) => {
  const title = req.params.title;
  // console.log(req.body);
  // res.status(200).json({ message: 'OK' });
  const blog = blogs.find(blog => blog.title === title);
  res.status(200).json({ title: blog.title, description: blog.description });
  // res.redirect(`/${title}`);
})

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
