import React from "react";
import "./test.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Test() {
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://ps.w.org/demo-awesome/assets/screenshot-1.png?rev=2003923",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://ps.w.org/demo-awesome/assets/screenshot-1.png?rev=2003923",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://ps.w.org/demo-awesome/assets/screenshot-1.png?rev=2003923",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://ps.w.org/demo-awesome/assets/screenshot-1.png?rev=2003923",
        },
    ];

    return (
        <div className="test_container">
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="card_open"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-container-${selectedId}`}
                            className="card-container"
                        >
                            <motion.img src={selectedItem.image} alt="" />
                            <motion.h5>{selectedItem.subtitle}</motion.h5>
                            <motion.h2>{selectedItem.title}</motion.h2>
                            <motion.button onClick={() => setSelectedId(null)}>
                                X
                            </motion.button>{" "}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="card_container">
                {items.map((item) => (
                    <motion.div
                        layoutId={item.id}
                        onClick={() => {
                            setSelectedId(item.id);
                            setSelectedItem(item);
                        }}
                        className="card"
                    >
                        <motion.img
                            layoutId={`card-container-${item.id}`}
                            className="card_image"
                            src={item.image}
                            alt=""
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
