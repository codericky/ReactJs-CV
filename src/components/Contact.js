import React from "react"
import "./assets/style.css"
const Contact = () => {
    return(
        <section>
                <p class="text-black-600 text-center text-2xl font-bold mt-8">Contact</p>
                <div class=" grid grid-rows-1 grid-flow-col gap-4 text-center mb-8 mt-5">
  <a href="https://linkedin.com"><button class="w-40 rounded-lg transition duration-500 ease-in-out bg-blue-600 hover:bg-indigo-400 transform hover:-translate-y-1 hover:scale-110 ...">
  LinkedIn
</button></a>

  <a href="https://youtube.com"><button class="w-40 rounded-lg transition duration-500 ease-in-out bg-blue-600 hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-110 ...">
  Github
</button></a>
 
  
  <a href="https://twitter.com"><button class="w-40 rounded-lg transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 ...">
  Twitter
</button></a>
  </div>


        </section>
    )
}

export default Contact