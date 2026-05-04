import { Card } from "./Card";

export const Section = () => {
   const articles = [
      {
         id: 1,
         image: '../src/assets/images/nodejs.jpg',
         avatar: '../src/assets/images/perfil-2.jpg',
         author: 'José Camilo Rodríguez Vera',
         date: '2022-11-02',
         title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur iure placeat, officiis beataevoluptas, numquam saepe in dolores consectetur voluptatem dolore odio nihil eos est.At molestiaeofficiis voluptatem!',
         views: 5,
         comments: 2,
         likes: 14
      },
      {
         id: 2,
         image: '../src/assets/images/react-logo.jpg',
         avatar: '../src/assets/images/perfil-2.jpg',
         author: 'José Camilo Rodríguez Vera',
         date: '2023-03-14',
         title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur iure placeat, officiis beataevoluptas, numquam saepe in dolores consectetur voluptatem dolore odio nihil eos est.At molestiaeofficiis voluptatem!',
         views: 5,
         comments: 2,
         likes: 14
      },
      {
         id: 3,
         image: '../src/assets/images/javaScript.jpg',
         avatar: '../src/assets/images/perfil-2.jpg',
         author: 'José Camilo Rodríguez Vera',
         date: '2023-05-05',
         title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur iure placeat, officiis beataevoluptas, numquam saepe in dolores consectetur voluptatem dolore odio nihil eos est.At molestiaeofficiis voluptatem!',
         views: 5,
         comments: 2,
         likes: 14
      },
   ];

   return (
      <div>
         {
            articles.map(({ id, image, avatar, author, date, title, description, views, comments, likes }) => (
               <Card
                  key={id}
                  image={image}
                  avatar={avatar}
                  author={author}
                  date={date}
                  title={title}
                  description={description}
                  views={views}
                  comments={comments}
                  likes={likes}
               />
            ))
         }
      </div>
   );
};