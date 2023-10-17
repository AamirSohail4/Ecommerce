import './Newsletter.scss';
import { Icon } from '@iconify/react';

const Newsletter = () => {
  return (
    <div className='newsletter-section'>
      <div className='newsletter-content'>
        <span className='small-text'>Newsletter</span>
        <span className='big-text'>Sing up for latest update and offers</span>
        <div className='form'>
          <input type='text' placeholder='' />
          <button>Subcribe</button>
        </div>
        <div className='text-bootom'>
          will be used in accordance with our privacy policy
        </div>
        <div className='social-icons'>
          <div className='icons'>
            <a href='#'>
              <Icon icon='devicon:facebook' />
            </a>
          </div>
          <div className='icons'>
            <a href='#'>
              <Icon icon='skill-icons:instagram' />
            </a>
          </div>
          <div className='icons'>
            <a href='#'>
              <Icon icon='skill-icons:twitter' />
            </a>
          </div>
          <div className='icons'>
            <a href='#'>
              <Icon icon='skill-icons:linkedin' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
