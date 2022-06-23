import Title from '../Title';
import './styles.scss'

function PersonalData() {
  return (
    <div className="personal-data">
     <Title color='white'>
        <h2>PROFILE</h2>
     </Title>

      <div className="address">
        <div className="street">
          <span>Street:</span>
          <span className="street-name">R. Amarelo, 420</span>
        </div>
        <div className="city">
          <span className="city">City:</span>
          <span className="city">Teresina</span>
        </div>
        <div className="zipcode">
          <span>Zip:</span>
          <span className="zip-code">40028922</span>
        </div>
        <div className="nationatilyy">
          <span>Nationality:</span>
          <span className="nationality">Brazilian</span>
        </div>
      </div>

      <div className="contact-info">
        <div className="phone"><span>PHONE:</span>+55 (86) 94444-3321</div>
        <div className="phone"><span>EMAIL:</span>isaias.carvalho@codeminer42.com</div>
        <div className="website"><span>WEBSITE:</span><a href="https://google.com">google.com</a></div>
      </div>

      <div className="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis porta condimentum 
          porta. Sed ornare, sapien et dapibus varius, sapien nulla venenatis nibh, vel finibus nunc eros 
          vitae diam. Vivamus malesuada augue nec magna pellentesque sollicitudin. Nullam convallis turpis 
          nec laoreet condimentum. Nulla et ipsum eu ipsum bibendum egestas at a nulla. Praesent euismod 
          purus quis nunc porttitor, et egestas urna condimentum. Nulla volutpat, odio ut aliquet auctor, 
          ipsum eros finibus elit, non mattis mi sem dapibus odio. Etiam nec faucibus justo. Phasellus 
          convallis tortor eget velit feugiat, at imperdiet libero dictum. Duis sit amet enim eu enim 
          dapibus dictum. Sed a nisl sit amet urna commodo vehicula. Nullam vitae ante sed dui malesuada 
          dignissim id ullamcorper elit.</p>
      </div>


    </div>
  );
}

export default PersonalData;
