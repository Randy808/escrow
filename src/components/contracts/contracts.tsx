import Contract from "./contract";
import contracts from "../../static/contracts";
import { Link } from "react-router-dom";

export default function Contracts() {
  return (
    <div className="space-y-4">
      {contracts.map((contract) => {
        return (
          <Link key={contract.id} className="block" to={`contracts/${contract.id}`}>
            <Contract contract={contract} />
          </Link>
        );
      })}
    </div>
  );
}
