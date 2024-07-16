document.addEventListener("DOMContentLoaded", () => {
    const displayArea = document.getElementById('displayArea');
  
    document.getElementById('navigatorbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
                p{
                    padding: 20px 10% 0px 10%;
                }
            </style>
            <h1>Navigator Information:</h1>
            <p>App Name: ${navigator.appName}</p>
            <p>Product: ${navigator.product}</p>
            <p>App Version: ${navigator.appVersion}</p>
            <p>User Agent: ${navigator.userAgent}</p>
            <p>Platform: ${navigator.platform}</p>
            <p>Language: ${navigator.language}</p>
        `;
    });
  
    document.getElementById('windowbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
                p{
                    padding: 20px 10% 0px 10%;
                }
            </style>
            <h1>Window Information:</h1>
            <p>Inner Height: ${window.innerHeight}</p>
            <p>Inner Width: ${window.innerWidth}</p>
        `;
    });
  
    document.getElementById('screenbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
                p{
                    padding: 20px 10% 0px 10%;
                }
            </style>
            <h1>Screen Information:</h1>
            <p>Width: ${screen.width}</p>
            <p>Height: ${screen.height}</p>
            <p>Available Width: ${screen.availWidth}</p>
            <p>Available Height: ${screen.availHeight}</p>
            <p>Color Depth: ${screen.colorDepth}</p>
            <p>Pixel Depth: ${screen.pixelDepth}</p>
        `;
    });
  
    document.getElementById('locationbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                    h1{
                        text-align: center;
                    }
                    p{
                        padding: 20px 10% 0px 10%;
                    }
                </style>
            <h1>Location Information:</h1>
            <p>Href: ${location.href}</p>
            <p>Hostname: ${location.hostname}</p>
            <p>Pathname: ${location.pathname}</p>
            <p>Protocol: ${location.protocol}</p>
        `;
    });
  
    document.getElementById('geolocationbtn').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(position => {
            displayArea.innerHTML = `
                <style>
                    h1{
                        text-align: center;
                    }
                    p{
                        padding: 20px 10% 0px 10%;
                    }
                </style>
                <h1>Geolocation Information:</h1>
                <p>Latitude: ${position.coords.latitude}</p>
                <p>Longitude: ${position.coords.longitude}</p>
            `;
        }, error => {
            displayArea.innerHTML = `<p>Geolocation is not available or permission is denied.</p>`;
        });
    });
    /* About Me part */
    document.getElementById('descriptionbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
                p{
                    padding: 20px 10% 0px 10%;
                    text-indent: 5em;
                }
            </style>
            <h1>Assignment #7:</h1>
            <h1>"Basic Webpage"</h1>
            <h1>Due: July 15, 2024</h1>
            <br>
            <p>In this assignment, you will combine and build on previously attained HTML, CSS, and JS skills to create a simple webpage with a navigation bar (menu). The page may also serve to support additional functionality developed in future assignments. The page should be hosted on QC Computer Science Department's server.</p>
            <br>
            <p>You may work with a coding partner, but you need to have your own copy of the code hosted on your server account. Your About pages (Developer Info and Contact Me) must be customized to you.</p>
            <br>
            <p style="text-align: right;">Yuhang Mao</p>
        `;
    });

    document.getElementById('contactbtn').addEventListener('click', () => {
        displayArea.innerHTML = `
            <style>
                h1{
                    text-align: center;
                }
            </style>
            <h1>Contact Me</h1>
            <form action="mailto:someone@example.com" method="post" enctype="text/plain" style="padding: 0px 0px 0px 10%;">
            <p>Name:</P>
            <input type="text" name="name"><br><br>
            <p>E-mail:</P>
            <input type="text" name="mail"><br><br>
            <p>Comment:</P>
            <input type="text" name="comment" size="50"><br><br>
            <input type="submit" value="Send">
            <input type="reset" value="Reset">
            </form>
        `;
    });
  });