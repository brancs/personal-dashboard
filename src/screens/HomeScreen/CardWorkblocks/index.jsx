import Card from "@/components/Card";
import Table from "@/components/Table";
import { headers, data } from "@/_mocks/cardWorkblocksData";

function CardWorkblocks() {
  return (
    <Card title={"Timeblocks"}>
      <Table headers={headers} data={data} showTHead={false} />
    </Card>
  );
}

export default CardWorkblocks;
