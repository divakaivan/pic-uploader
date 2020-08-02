import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout // animate to new position
            whileHover={{ opacity: 1 }} // opacity on the css is 0.8 and framer will animate from 0.8 to 1
            onClick={() => setSelectedImage(doc.url)}
            className="img-wrap"
            key={doc.id}
          >
            <motion.img
              src={doc.url}
              alt="Uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
