import logo from './logo.svg';
import './App.css';
import ShoesStore from './BaiTapProps/ShoesStore';

function App() {
  return (
    <div>
      <h3 className='text-center p-3 text-light bg-dark'>BÀI TẬP PROPS (SHOES)</h3>
      <div className='container'>
        <ShoesStore />
      </div>
      <footer class="py-3 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
      </footer>
    </div>
  );
}

export default App;
