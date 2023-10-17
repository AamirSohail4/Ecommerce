import { Link } from 'react-router-dom';
import '../Header/Header.scss';
export default function Navebar() {
  return (
    <Navebar>
      <div className='header-content'>
        <ul className='Left'>
          <li>
            <Link to='/' home>
              Hom
            </Link>
          </li>
          <li>
            <Link to='/category'>Category</Link>
          </li>
          <li>
            <Link to='/main'>Main</Link>
          </li>
        </ul>
      </div>
    </Navebar>
  );
}
