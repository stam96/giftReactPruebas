import { hookListCategory } from "../Hooks/hooksListCategoria";
import CategoriaAgregar from "./components/CategoriaAgregar";
import GridCategory from "./components/GridCategory";

const App = () => {
  const {categorias, recibirCategoria} = hookListCategory("mazinger")
  //const [categorias, setCategorias] = useState(["mazinger"]);
  // const recibirCategoria = (categoria) => {
  //   if(!categorias.includes(categoria)){
  //       return setCategorias([...categorias, categoria]);
  //   }
  // };
  return (
    <>
      {/* titulo */}
      <h1>App</h1>
      {/* imput */}
      <CategoriaAgregar recibirCategoria={recibirCategoria} />
      {/* listado */}
      <ol>
        {categorias.map((categoria, index) => (
        //   <li key={index}>{categoria}</li>
        <GridCategory key={index} categoria={categoria}/>
        ))}
      </ol>
    </>
  );
};

export default App;
