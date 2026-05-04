new TypeIt("#animation", {
   // strings: "Full Stack Developer",
   speed: 75,
   loop: true,
})
   .type("future Web Developer", { delay: 900 })
   .delete(23)
   .pause(700)
   .type("and Javascript Developer", { delay: 900 })
   .delete(16)
   .go();
