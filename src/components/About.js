import React from "react"
import img from "../components/people.jpg"
const About = () => {
    return(
    <section>
            <p class="text-black-600 text-center text-2xl font-bold mt-8">About</p>
            <div class="md:container md:mx-auto grid grid-rows-1 grid-flow-col mt-8">
  <div class="ml-8"><img src={img} alt="gambarku"/></div>
  <div class="ml-8 mr-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   ultricies accumsan dui, et dictum est gravida vel. Duis pellentesque malesuada lorem, quis dignissim risus ultrices ac. Nullam ante velit, ullamcorper at elit tincidunt, bibendum facilisis ante. In tortor est, scelerisque sit amet laoreet eget, maximus non quam. Nam scelerisque lacinia ex faucibus malesuada. Fusce vitae augue sit amet turpis elementum egestas sit amet non velit. Sed est purus, tristique sed pellentesque sed, blandit ac nulla. Nulla nec dui quis risus semper feugiat nec eget enim. Nullam fermentum lacus a erat egestas porttitor. Ut vel vestibulum nulla, id elementum neque. Aliquam erat volutpat. Proin at ultricies lacus, et efficitur ipsum. 
   ultrices enim. Aenean sollicitudin tempus consequat. </div>
</div>
    </section>
    )
}

export default About 