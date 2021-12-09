import React,{useEffect} from 'react'
import img2 from '../images/home-openbook.png'
import  img3 from '../images/bird1.png'
import  img4 from '../images/bird2.png'
import  img5 from '../images/gear.svg'
import  img6 from '../images/gear2.svg'

const Home = () => {


  const scrollEventHandler= ()=>{
    let value = window.scrollY;
    document.getElementById('gear').style.transform = "rotate("+window.pageYOffset+"deg)";
    document.getElementById('gear2').style.transform = "rotate(-"+window.pageYOffset+"deg)";
    document.getElementById('text1').style.top = 40 + value * -0.1 + '%';
    document.getElementById('bird1').style.top = value * -0.1 + 'px';
    document.getElementById('bird1').style.left = value * 0.5 + 'px';
    document.getElementById('bird2').style.top =  value * -0.1 + 'px';
    document.getElementById('bird2').style.left = value * -1+ 'px';
    document.getElementById('btn1').style.marginTop = value *0.5+ 'px';
    
  }
    
  useEffect(() => {
      window.addEventListener('scroll',scrollEventHandler);
      return () => {
          window.removeEventListener('scroll',scrollEventHandler);
      }
  }, [])
   

    return (
        <>
           <div className="home-section " id="home">
               <h2 id="text1"><span>It's Time to start</span><br />Study</h2>
               <img src={img3}  id="bird1"  />
               <img src={img5}  id="gear"  />
               <p><img src={img6}  id="gear2"  /></p>
              
               <img src={img4}  id="bird2"  />
               <a to="#" id="btn1">Signin</a>
               <img src={img2}  id="openbook"  />
           </div>
           <div className="sec">
               <h2>Parallax scrolling Effects</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos pariatur blanditiis officiis minus
                vero doloremque optio animi alias quaerat, ducimus cupiditate, veritatis aut similique. Quisquam
                quaerat eos recusandae ex, possimus, nostrum quae sint est quia odit adipisci ipsam voluptatum 
                 debitis a corporis rem qui aspernatur assumenda exercitationem, magni facilis? Iure accusantium 
                provident voluptatum magnam dignissimos placeat ducimus. Excepturi exercitationem accusantium,
                laudantium laboriosam error nobis impedit nihil nostrum iste beatae quisquam placeat officia 
                      consequuntur rerum veritatis facilis ad veniam nulla blanditiis perferendis neque facere autem.
                 Dolores eius nulla accusantium voluptatum ipsa quam harum suscipit omnis facere amet sed non labore
                        <br/>rem quos, reiciendis veritatis quisquam blanditiis dignissimos. Officia sed voluptate voluptas
                         pariatur odit recusandae a fugit facilis cum iusto inventore ducimus molestiae sint officiis
                          fuga hic tempore dolorum, ab provident maxime at quaerat? Voluptatem voluptas, sed eveniet  <br/>
                          molestiae quam animi quisquam at possimus quos numquam. Architecto ad repudiandae rerum quas 
                          necessitatibus animi nobis harum sed, vero, maxime dignissimos adipisci unde odit, repellat
                           consequuntur doloremque labore ea neque nostrum reiciendis iure dolor. Nobis perspiciatis
                  voluptatibus quod, repellat soluta, excepturi exercitationem placeat velit quas sapiente
                    asperiores nisi tempore laudantium porro veniam minima est. Sint omnis perferendis corrupti 
                   blanditiis obcaecati quia rem, saepe cupiditate odio eaque <br/> nesciunt similique velit nobis
                     pariatur vel praesentium dolorum officiis. Vel dolores sequi tempora quasi, adipisci in
                     molestiae exercitationem nisi deserunt, consequuntur soluta praesentium. Facere maxime 
                     id repellendus in reprehenderit officia quos dolorem nesciunt ipsa, obcaecati cum voluptas
                     distinctio tempora est ullam rerum, pariatur ipsam temporibus recusandae non animi commodi 
                    voluptates. Nemo, commodi minima quia optio voluptatem ipsum quae esse quisquam quas non blanditiis amet
                     magnam incidunt quos deleniti consectetur dolorum maxime <br/> nisi mollitia laborum. Rem, nam tempora voluptas 
                     omnis ea totam vitae eveniet ad perspiciatis ullam quo sed corporis. Fugiat cupiditate modi beatae consequatur
                      maiores. Natus error aperiam adipisci ratione tenetur, ullam minus excepturi quibusdam cum possimus, autem ut.
                       Cum eligendi perspiciatis possimus similique ab  <br/>libero minima ullam optio porro? Commodi, libero vero architecto
                        beatae maiores reiciendis velit illum deleniti, iure, nihil ea 
               nostrum doloremque! Magni amet nostrum consectetur illo, ipsam repellendus facere velit necessitatibus laborum magnam, 
               accusamus distinctio accusantium error. <br/> Culpa ut hic et pariatur. Assumenda officiis culpa necessitatibus laboriosam quas</p>
           </div>

         


        </>
    )
}

export default Home
