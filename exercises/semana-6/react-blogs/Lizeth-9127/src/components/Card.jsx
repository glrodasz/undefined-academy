export const Card = ({title, date, children}) => {
    return (
        < >
         <div className="article">
         <img src="https://picsum.photos/1080/720/" alt="sample-img"/>
            <h1>{title}</h1><span className="caption date">{date}</span>
             <p>{children}</p><span className="caption">Leer más</span>
         </div>
        </>
    );
}