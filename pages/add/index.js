import React, { useState } from "react";

function Add() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [productos, setProductos] = useState([]);

  var i = 1;

  const [producto, setProducto] = useState({
    nombre: "",
    categoria: "",
    costo: "",
    tipo: "",
    descripcion: "",
    imagen: "",
    modelos: "",
  });

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCostoChange = (event) => {
    setCosto(event.target.value);
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.value);
  };

  const handleModels = (e, index) => {
    var aux = [...modelos];
    aux[index] = e.target.value;
    setModelos(aux);
  };

  const handleSubmit = () => {
    const productoAux = {
      nombre: nombre,
      categoria: categoria,
      costo: costo,
      tipo: tipo,
      descripcion: descripcion,
      imagen: imagen,
      modelos: modelos,
    };
    setProducto(productoAux);
    if (categoria == "Fundas") {
      fetch("http://localhost:3003/funda", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          "content-type": "application/json",
        },
      }).catch((e) => console.log(e));
    } else {
      fetch("http://localhost:3003/products", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          "content-type": "application/json",
        },
      }).catch((e) => console.log(e));
    }
  };

  const handleReset = () => {
    setTipo("");
    setNombre("");
    setCategoria("");
    setCosto("");
    setDescripcion("");
    setImagen("");
    setModelos([]);
  };

  const addModel = (e) => {
    e.preventDefault();
    var aux = [];
    aux = [...modelos, " "];
    setModelos(aux);
  };
  const deleteModel = (e) => {
    e.preventDefault();
    var aux = [];
    aux = [...modelos];
    aux.pop();
    setModelos(aux);
  };

  const getProducts = (e) => {
    e.preventDefault();
    fetch("http://localhost:3003/products")
      .then((data) => data.json())
      .then((data) => setProductos(data));
  };
  const deleteProduct = (x, index, nombre) => {
    x.preventDefault();
    console.log("eliminar...", index, nombre);
    var aux = [...productos];
    aux.splice(index, 1);
    setProductos(aux);
    fetch("http://localhost:3003/eliminar", {
      method: "POST",
      body: JSON.stringify({ nombre: nombre }),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  const cerrarLista = (e) => {
    e.preventDefault()
    setProductos([])
  }
  return (
    <div id="general" className="p-12 bg-zinc-800  ">
      <div className=" p-4">
        <div className="flex justify-center font-bold text-2xl text-white">
          <h1>Ingresar producto</h1>
        </div>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div
                  id="divmayor"
                  className="bg-pink-300 rounded rounded-md p-10 mt-10 h-fit"
                >
                  <label className=" mr-3">Categoría:</label>

                  <select
                    id="categoria"
                    value={categoria}
                    onChange={handleCategoriaChange}
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="AppleWatch">AppleWatch</option>
                    <option value="Audifonos">Audifonos</option>
                    <option value="Cargadores">Cargadores</option>
                    <option value="FundasAirPods">FundasAirPods</option>
                    <option value="Fundas">Fundas</option>
                    <option value="Ipad">Ipad</option>
                    <option value="Limpiador">Limpiador</option>
                    <option value="Micas">Micas</option>
                    <option value="Popsockets">Popsockets</option>
                    <option value="ProtectorCable">ProtectorCable</option>
                    <option value="ProtectorCubo">ProtectorCubo</option>
                    <option value="ProtectorMagsafe">ProtectorMagsafe</option>
                    <option value="ProtectorCamara">ProtectorCamara</option>
                    <option value="Straps">Straps</option>
                    <option value="Teclados">Teclados</option>
                  </select>
                  <div id="divmedio">
                    <div className="mt-1">
                      <label className="mr-6">Nombre:</label>
                      <input
                        className="rounded rounded-md"
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                      />
                    </div>
                    <div className="mt-1">
                      <label htmlFor="costo" className="mr-10">
                        Costo:
                      </label>
                      <input
                        className="rounded rounded-md"
                        type="text"
                        id="costo"
                        value={costo}
                        onChange={handleCostoChange}
                      />
                    </div>
                    <div className="mt-1">
                      <label className="mr-12">Tipo:</label>
                      <input
                        className="rounded rounded-md ml-1"
                        type="text"
                        id="tipo"
                        value={tipo}
                        onChange={handleTipoChange}
                      />
                    </div>
                    <div className="mt-2 ">
                      <label className="mr-2">Descripción:</label>
                      <br />
                      <textarea
                        type="text"
                        id="descripcion"
                        value={descripcion}
                        onChange={handleDescripcionChange}
                      />
                    </div>
                  </div>

                  <div>
                    <div id="urls">
                      <div>
                        <label htmlFor="ur">Imagen:</label>
                      </div>
                      <div>
                        <input
                          className="block w-full md:w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 my-1"
                          type="text"
                          onChange={(e) => {
                            handleImagenChange(e);
                          }}
                        />
                        <input
                          className="block w-full md:w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 my-1"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-10"
                >
                  Cancelar
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Aceptar
                </button>
                <div className="flex my-1">
                  <button
                    onClick={(e) => {
                      getProducts(e);
                    }}
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-10"
                  >
                    Eliminar Producto
                  </button>
                  {productos.length > 0 ? (
                    <button
                      onClick={(e) => {
                        cerrarLista(e);
                      }}
                      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-10"
                    >
                      Cerrar lista de productos
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div>
                {productos.map((e, index) => {
                  return (
                    <div key={index} className="mt-2 bg-white w-full p-4">
                      <p>Nombre : {e.nombre}</p>
                      <p>Categoria : {e.categoria}</p>
                      <p>Precio : {e.costo}</p>
                      <p>Descripción : {e.descripcion}</p>
                      <button
                        onClick={(x) => {
                          deleteProduct(x, index, e.nombre);
                        }}
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-10 my-1"
                      >
                        Eliminar Producto
                      </button>
                    </div>
                  );
                })}
              </div>
              {categoria == "Fundas" ? (
                <div className="p-10 w-full">
                  <div className="bg-zinc-100 rounded rounded-md p-5">
                    <label>Ingresar modelos disponibles:</label>
                    <div className="flex my-1">
                      <button
                        className=" mx-3 bg-blue-200 rounded-full w-6 flex justify-center items-center"
                        onClick={(e) => {
                          addModel(e);
                        }}
                      >
                        +
                      </button>
                      <button
                        className=" mx-3 bg-red-200 rounded-full w-6 flex justify-center items-center"
                        onClick={(e) => {
                          deleteModel(e);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <br></br>

                    {modelos.map((e, index) => {
                      return (
                        <input
                          key={index}
                          type={"text"}
                          className="border border-2 rounded rounded-sm"
                          placeholder="añadir"
                        />
                      );
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

//module.exports = {color, dolor2, div}
export default Add;
