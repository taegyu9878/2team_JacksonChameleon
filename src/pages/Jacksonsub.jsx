import React, { useState } from "react";
import jacksonProduct from "../data/jacksonproduct";

const Jacksonsub = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [showNew, setshowNew] = useState(false);

  // 카테고리 자동 추출
  const categories = [
    "All",
    ...new Set(jacksonProduct.map((item) => item.product)),
  ];

  // 가격 문자열을 숫자로 변환
  const intPrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = priceStr.replace(/[^0-9]/g, "");
    return Number(num) || 0;
  };

  // 필터링
  let filteredProducts =
    selectedCategory === "All"
      ? jacksonProduct
      : jacksonProduct.filter((item) => item.product === selectedCategory);

  if (showNew) {
    filteredProducts = filteredProducts.filter(
      (item) => item.badge && item.badge.toLowerCase() === "new"
    );
  }

  // 정렬
  if (sortOrder === "asc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => intPrice(a.price_discount) - intPrice(b.price_discount)
    );
  } else if (sortOrder === "desc") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => intPrice(b.price_discount) - intPrice(a.price_discount)
    );
  }

  return (
    <div>
      <h2>Jackson Product List</h2>


      <div style={{ marginBottom: "20px" }}>
        {categories.map((cate) => (
          <button key={cate} onClick={() => setSelectedCategory(cate)}>
            {cate}
          </button>
        ))}

        <button onClick={() => setIsFilterOpen(!isFilterOpen)}>Filter</button>

        {isFilterOpen && (
          <div>
            <button onClick={() => setSortOrder("asc")}>가격 낮은순</button>
            <button onClick={() => setSortOrder("desc")}>가격 높은순</button>
            
            <button onClick={() => setshowNew((prev) => !prev)}>
              {showNew ? "NEW 상품 해제" : "NEW 상품만 보기"}
            </button>
          {/* {!showNew && (
            <button onClick={() => setshowNew(true)}>NEW 상품만 보기</button>
          )}

        
          {showNew && (
            <button onClick={() => setshowNew(false)}>NEW 상품 해제</button>
          )} */}
            <button onClick={() => setSortOrder(null)}>정렬 초기화</button>
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((item, index) => (
          <div key={index}>
            <img src={item.img_url} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.brand}</p>
            <p>{item.price_discount}</p>
            <p>{item.badge}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jacksonsub;
