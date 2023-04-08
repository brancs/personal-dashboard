import Style from "./index.module.css";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { headers, data } from "@/_mocks/cardWorkblocksData";

function CardWorkblocks() {
  return (
    <Card title={"Workblocks"}>
      <Table headers={headers} data={data} showTHead={false} />
    </Card>
  );
}

export default CardWorkblocks;
