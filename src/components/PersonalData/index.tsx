import './styles.scss'

function PersonalData() {
  return (
    <div className="personal-data">
      <div className="header">
        <h2>PROFILE</h2>
      </div>

      <div className="address">
        <span className="street-name">R. Amarelo, 420</span>
        <span className="city">Teresina</span>
        <span className="zip-code">40028922</span>
        <span className="nationality">Brazilian</span>
      </div>

      <div className="contact-info">
        <div className="phone"><span>PHONE</span>+55 (86) 94444-3321</div>
        <div className="phone"><span>EMAIL</span>isaias.carvalho@codeminer42.com</div>
      </div>


    </div>
  );
}

export default PersonalData;
