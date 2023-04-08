import Colors from "@/styles/theme/colors";
import Style from "./index.module.css";

function index({ headers, data, showTHead = true }) {
  if (!data || !headers) {
    return (
      <div
        style={{
          textAlign: "center",
          color: Colors.grey300,
        }}
      >
        {"Sem dados :("}
      </div>
    );
  }

  return (
    <table className={Style.table}>
      {headers && showTHead && (
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className={Style.tableHeader}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {headers.map((header) => {
              return (
                <td
                  key={`${item.id}-${header}`}
                  style={item[header].style || {}}
                >
                  {item[header].info || item[header]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default index;
