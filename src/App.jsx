
import './App.css';
import './Headerstyle.css'
// import Greeting from './components/Greeting';
import Headers from './components/header';
import Footers from './components/Footers';
import './Footerstyle.css';

function App() {
  return (
    <>
    {/* <Greeting /> */}
    <Headers/>
    <main className='bgc'>
        <div className="maincontainer">
            <h1>Programs We Offer</h1>
            
        </div>
        <div className="containercards">
        <div className="containercard one">
            <a href="https://learning.vnritsolutions.com/html/html5">
            <div className="htmlhead1">
                <h2>HTML</h2>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path></svg>
            </div>
            <div className="htmlcontent">
                <h3>Career Outcome</h3>
                <p>Building static websites</p>
                <h3>What you will learn</h3>
                <p>Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career. If you want to be a web developer or work with any other technology, you need to know HTML and CSS. With HTML, you can create web pages. You will learn from basics to advanced of HTML. Information about the tags, id, class and more advanced features of html.</p>
            </div>
            </a>
        </div>

        <div className="containercard two">
            <a href="https://learning.vnritsolutions.com/html/html5">
            <div className="htmlhead2">
                <h2>CSS</h2>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mantine-o5ykfg" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path></svg> */}
            </div>
            <div className="htmlcontent">
                <h3>Career Outcome</h3>
                <p>Building static websites</p>
                <h3>What you will learn</h3>
                <p>Learning how to code allows you to bring out your personality on your own website, enables you to stand out from the crowd, contribute to projects better, helps you understand and explore other languages and provides you with an opportunity to transition into a different career. If you want to be a web developer or work with any other technology, you need to know HTML and CSS. And with CSS you can design the html elements and also animate them to look more propting or attrative for viewer to look or spend more time in your website. You will learn from basics to advanced of CSS from styling to animation of the elements.</p>
            </div>
            </a>
        </div>

        <div className="containercard three">
            <a  href="https://learning.vnritsolutions.com/html/html5">
            <div className="htmlhead3">
                <h2>JAVA SCRIPT</h2>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path></svg> */}
            </div>
            <div className="htmlcontent">
                <h3>Career Outcome</h3>
                <p>Front End Web Developer, Web Application Developer</p>
                <h3>What you will learn</h3>
                <p>JavaScript is a scripting language used to add and control dynamic content on websites, where mark-up languages like HTML and CSS give web browsers how to display a website like defining static things like headers, fonts, paragraphs etc. JavaScript executes the features on the page that need to update in real-time without a user have to refresh a screen. Here you will learn the basics of JS like variables, data-structures and interacting with the webpage to make it responsive based on the click or other events triggered by the user.</p>
            </div>
            </a>
        </div>

        <div className="containercard four">
            <a href="https://learning.vnritsolutions.com/html/html5">
            <div className="htmlhead4">
                <h2>REACT JS</h2>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg>
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path></svg> */}
            </div>
            <div className="htmlcontent">
                <h3>Career Outcome</h3>
                <p>Front End Web Developer, Web Application Developer</p>
                <h3>What you will learn</h3>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.</p>
            </div>
            </a>
        </div>

        <div className="containercard five">
            <a href="https://learning.vnritsolutions.com/html/html5">
            <div className="htmlhead5">
                <h2>DSA</h2>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z"></path></svg>
                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mantine-dikr3r" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"></path></svg> */}
            </div>
            <div className="htmlcontent">
                <h3>Career Outcome</h3>
                <p>Front End Web Developer, Web Application Developer</p>
                <h3>What you will learn</h3>
                <p>A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.It’s just an arrangement of data. You can define a way that you interact with this data, and the way that it’s arranged in memory. some data structure are in contiguous blocks of memory. which means they’re located next to each other.</p>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex neque rerum, necessitatibus repudiandae quos illo fuga itaque at? Numquam adipisci quod consectetur nemo facere! Molestiae, alias dicta exercitationem culpa commodi, ipsum minima facilis, id ipsa repellendus suscipit maiores placeat nemo! Aperiam nulla incidunt nobis ea. ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid odit illo asperiores nam enim, sapiente consequuntur libero, reiciendis ducimus assumenda modi!</p> */}
            </div>
            </a>
        </div>
        </div>
    </main>  
    <Footers/>    
    </>
  );
}

export default App;