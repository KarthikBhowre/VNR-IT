import React from 'react';

function Headers() {
  return (
    <header>
     <div class="containerfv">
            <div class="logo">
                <a href="https://learning.vnritsolutions.com/free-learning">
                    <h1 class="logotexto">VNR</h1>
                    <p class="logotextt">IT SOLUTIONS</p>
                </a>
            </div>
            <div class="navbar">
                <a href="" target="_blank">Home</a>
                <a href="" target="_blank">Contact Us</a>
                <a href="" target="_blank">Portfolio</a>
                <div class="dropdown">
                    <button class="dropdown-button">Training & Learning</button>
                    <div class="dropdown-content">
                        <a href="">Free</a>
                        <a href="">Paid$</a>
                    </div>
                </div>
            </div>
        </div>
        </header>
  );
}

export default Headers;