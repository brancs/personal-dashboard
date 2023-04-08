import Card from "@/components/Card";
import Table from "@/components/Table";
import { headers, data } from "@/_mocks/cardActivityData";

function CardActivity() {
  return (
    <Card title={"Activity"}>
      <Table headers={headers} data={data} showTHead={false} />
    </Card>
  );
}

export default CardActivity;
