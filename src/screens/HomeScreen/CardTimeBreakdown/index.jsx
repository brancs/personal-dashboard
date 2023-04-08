import Card from "@/components/Card";
import Table from "@/components/Table";
import { headers, data } from "@/_mocks/cardTimeBreakdownData";

function CardTimeBreakdown() {
  return (
    <Card title={"Time Breakdown"}>
      <Table headers={headers} data={data} showTHead={false} />
    </Card>
  );
}

export default CardTimeBreakdown;
