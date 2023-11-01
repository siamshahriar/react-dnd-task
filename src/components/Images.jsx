import { useState } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

const Images = ({
  Img,
  index,
  selectedImages,
  handleImageSelection,
  product,
}) => {
  const isSelected = selectedImages.includes(index);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleCheckboxClick = () => {
    handleImageSelection(index);
  };

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`transition ease-in-out border-4 border-gray-200 rounded-lg relative ${
            index === 0 ? "col-span-2 row-span-2" : ""
          } ${isHovered || isSelected ? "brightness-50" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <input
            type="checkbox"
            className={`absolute top-3 left-3 z-10 cursor-pointer ${
              isSelected || isHovered ? "visible" : "hidden"
            }`}
            checked={isSelected}
            onChange={handleCheckboxClick}
          />
          <img src={Img} className="w-full h-full" alt="" />
        </div>
      )}
    </Draggable>
  );
};

Images.propTypes = {
  Img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectedImages: PropTypes.array.isRequired,
  handleImageSelection: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default Images;
