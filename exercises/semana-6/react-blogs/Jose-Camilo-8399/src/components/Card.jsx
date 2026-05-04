import { date_humanize } from "../assets/js";

export const Card = ({ image, avatar, author, date, title, description, views, comments, likes }) => {
   return (
      <div className="mx-auto px-4 py-8 max-w-xl ">
         <div className="bg-white shadow-2xl rounded-lg tracking-wide">
            <div className="md:flex-shrink-0">
               <img className="w-full h-auto rounded-lg rounded-b-none" src={image} alt="logo-react" />
            </div>
            <div>
               <div className="flex items-center justify-between pb-3 pt-3">
                  <div className="flex items-center">
                     <div>
                        <img className="w-12 h-12 object-cover rounded-full mx-4 shadow" src={avatar} alt="foto-perfil" />
                     </div>
                     <span className="text-sm tracking-tighter text-gray-900">{author}</span>
                  </div>
                  <time className="text-gray-600 text-sm pr-3 italic" dateTime={date}>{date_humanize(date)}</time>
               </div>
               <hr />
               <div className="px-8 py-2 mt-2 mb-2">
                  <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{title}</h2>
                  <p className="text-sm text-gray-700 mr-1">{description}</p>
               </div>
               <hr />
               <div className="flex items-center justify-between pt-3 pb-3">
                  <div className="text-sm tracking-tighter text-gray-600 pl-3 flex gap-3">
                     <span>{views} <i>views</i></span>
                     <span>{comments} <i>comments</i></span>
                  </div>
                  <span className="text-sm tracking-tighter text-gray-600 pr-3">{likes} <i>❤️</i></span>
               </div>
            </div>
         </div>
      </div>
   );
};