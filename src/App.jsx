import Img1 from "../public/assets/images/image-1.webp";
import Img2 from "../public/assets/images/image-2.webp";
import Img3 from "../public/assets/images/image-3.webp";
import Img4 from "../public/assets/images/image-4.webp";
import Img5 from "../public/assets/images/image-5.webp";
import Img6 from "../public/assets/images/image-6.webp";
import Img7 from "../public/assets/images/image-7.png";
import Img8 from "../public/assets/images/image-8.png";
import Img9 from "../public/assets/images/image-9.png";
import Img10 from "../public/assets/images/image-10.jpeg";
import Img11 from "../public/assets/images/image-11.jpeg";
import AddImages from "./components/AddImages";
import { useState } from "react";
import Images from "./components/Images";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const initialProducts = [
    {
      id: 1,
      imageUrl: Img1,
    },
    {
      id: 2,
      imageUrl: Img2,
    },
    {
      id: 3,
      imageUrl: Img3,
    },
    {
      id: 4,
      imageUrl: Img4,
    },
    {
      id: 5,
      imageUrl: Img5,
    },
    {
      id: 6,
      imageUrl: Img6,
    },
    {
      id: 7,
      imageUrl: Img7,
    },
    {
      id: 8,
      imageUrl: Img8,
    },
    {
      id: 9,
      imageUrl: Img9,
    },
    {
      id: 10,
      imageUrl: Img10,
    },
    {
      id: 11,
      imageUrl: Img11,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectAll, setSelectAll] = useState(true);

  const handleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const handleSelectAll = () => {
    setSelectedImages([]);
  };

  const handleDeleteImages = () => {
    // Filter out the selected images from the products array
    const updatedProducts = products.filter(
      (product, index) => !selectedImages.includes(index)
    );
    setProducts(updatedProducts);

    // Clear the selected images
    setSelectedImages([]);
  };

  // dnd
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white w-full md:w-4/6 h-full rounded-lg">
        <div className="flex justify-between p-6 px-9">
          <div className="flex items-center gap-2">
            {selectedImages.length === 0 ? (
              <h2 className="text-2xl font-medium">Gallery</h2>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="checkbox checkbox-info"
                />
                <h2 className="text-2xl font-medium">
                  {selectedImages.length} Files Selected
                </h2>
              </>
            )}
          </div>
          {selectedImages.length > 0 && (
            <button
              onClick={handleDeleteImages}
              className="text-xl font-medium text-red-800 btn btn-warning"
            >
              Delete Files
            </button>
          )}
        </div>
        <div className="divider"></div>
        {/* Gallery Photos*/}
        <div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="products">
              {(provided) => (
                <div
                  className="grid grid-cols-2 md:grid-cols-5 gap-6 px-8 py-3 mb-8"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {products.map((product, index) => (
                    <Images
                      key={product.id}
                      Img={product.imageUrl}
                      index={index}
                      selectedImages={selectedImages}
                      handleImageSelection={handleImageSelection}
                    />
                  ))}
                  {provided.placeholder}
                  <AddImages />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
