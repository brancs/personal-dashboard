import Card from "@/components/Card";
import Table from "@/components/Table";
import { headers, data } from "@/_mocks/cardProjectsData";

function CardProjects() {
  return (
    <Card title={"Projects"}>
      <Table headers={headers} data={data} showTHead={false} />
    </Card>
  );
}

export default CardProjects;
