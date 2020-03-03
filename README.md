## Uints Converter API By Ahmad Ali 

## live at:
https://boilerplate-project-metricimpconverter--ahmadali5.repl.co/

## In this project:
 <h3 id="about" >In this project</h3>
      <ol>
        <li>the client is prevented from trying to guess(sniff) the MIME type.</li>
        <li>cross-site scripting (XSS) attacks are prevented.</li>
        <li><b>GET</b> to <code>/api/convert</code> with a single parameter containing an accepted number and unit and have it converted.</li>
        <li>convert 'gal' to 'L' and vice versa. <b>(1 gal to 3.78541 L)</b></li>
        <li>convert 'lbs' to 'kg' and vice versa. <b>(1 lbs to 0.453592 kg)</b></li> 
        <li>convert 'mi' to 'km' and vice versa. <b>(1 mi to 1.60934 km)</b></li>
        <li>If unit of measurement is invalid, returned will be 'invalid unit'.</li>
        <li>If  number is invalid, will be considered as 1.</li>
        <li> use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.</li>
        <li>return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format <code>{initNum} {initial_Units} ==> {returnNum} {return_Units}</code> with the result rounded to 5 decimals.</li>
        
      </ol>
      <h3>Example Input:</h3>
      <code>input=4gal </code>, 
      <code>input=1/2km </code>, 
      <code>input=5.4/3lbs </code>, 
      <code>input=kg </code>
      <h3>Example return:</h3>
      <code>{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}</code>
    </div>
    
 ## video:
 <iframe width="560" height="315" src="https://www.youtube.com/embed/f3vxdx8I_c0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
 ## my portfolio:
 http://www.ahmad-ali.co.uk/
