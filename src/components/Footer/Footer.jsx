import './Footer.scss';
import CardImg from '../../assets/payments.png';
import { Icon } from '@iconify/react';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>About</div>
          <div className='text'>
            <p>
              Voluptantem accusantium doloremque laudantum , totam rem aperiam,
              eque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo eaque ipsa quae ab illo
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Contact</div>
          <div className='c-item'>
            <Icon icon='pajamas:location' />
            <div className='tex'>
              Adress: Kayaloram Rd,accusantium doloremque laudantum , totam rem
              aperiam, eque 9088888
            </div>
          </div>
          <div className='c-item'>
            <Icon icon='icomoon-free:mobile' />
            <div className='tex'>Phone:(+92)03044934949499</div>
          </div>
          <div className='c-item'>
            <Icon icon='fluent-emoji-flat:envelope' />
            <div className='tex'>Email:Karole1134@gmail.com</div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Catigories</div>
          <span className='text'>HeadPhones</span>
          <span className='text'>Blutooth Speeker</span>
          <span className='text'>Smart Watches</span>
          <span className='text'>Wirles Ear Budes</span>
          <span className='text'>Home Theater </span>
          <span className='text'>Projecter</span>
        </div>
        <div className='col'>
          <div className='title'>Pages</div>
          <span className='text'>Home</span>
          <span className='text'>About</span>
          <span className='text'>Privecy Policey </span>
          <span className='text'>Returns</span>
          <span className='text'>Terms$ Condittion </span>
          <span className='text'>Contact Us </span>
        </div>
      </div>
      <div className='foot-bar'>
        <div className='footbar-content'>
          <div className='text'>
            JSDEVSTORE 2022 CREATED BY JS DEV.PREMIU E-COMMERCE SOLUTIONS
          </div>
          <img src={CardImg} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
