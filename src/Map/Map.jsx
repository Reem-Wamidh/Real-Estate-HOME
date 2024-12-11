import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { properties } from "../lib/DumData.js";
import { Link } from "react-router-dom";

const Map = ({ items }) => {
  useEffect(() => {
    const mapContainerId = "map";

    // إزالة أي خريطة موجودة سابقًا عند إعادة تحميل المكوّن
    if (L.DomUtil.get(mapContainerId)) {
      L.DomUtil.get(mapContainerId)._leaflet_id = null;
    }

    // إنشاء الخريطة
    const map = L.map(mapContainerId).setView([40.730610, -73.935242], 10);

    // إضافة طبقة التجانب (tiles)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // إضافة العلامات (markers) مع النوافذ المنبثقة
    items.forEach((item) => {
      const { coords, name, price, description, images } = item;

      if (coords && coords[0] !== undefined && coords[1] !== undefined) {
        // إعداد محتوى النافذة المنبثقة
        const popupContent = `
        <div>
          <div style="display: flex; justify-content: center; gap: 10px;">
            ${images
              .map(
                (image) =>
                  `<img src="${image}" alt="${name}" style="width: 200px; height: 200px; border-radius: 8px; object-fit:cover;" />`
              )
              .join("")}
          </div>
          <div style="text-align:center; margin: 5px;">
            <p style="font-weight: bold">Price: ${price.toLocaleString()} $</p>
            <a href="/${item.id}" target="_blank" style="text-decoration: none; color: inherit;">
              <h2>${name}</h2>
            </a>
            <p style="display: flex; flex-wrap: wrap;">${description}</p>
          </div>
        </div>
      `;
        // إنشاء العلامة وإضافة النافذة المنبثقة
        L.marker(coords).addTo(map).bindPopup(popupContent);
      } else {
        console.warn("Invalid coords for item:", item);
      }
    });

    // تنظيف الخريطة عند إلغاء تحميل المكوّن
    return () => {
      map.remove();
    };
  }, [items]);

  // الحاوية التي ستظهر فيها الخريطة
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
