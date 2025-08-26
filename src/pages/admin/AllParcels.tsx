import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  useBlockParcelMutation,
  useGetAllParcelsQuery,
  useUnBlockParcelMutation,
} from "@/redux/features/parcel/parcel.api";
import type { IParcelItem } from "@/types/parcel.interface";

const AllParcels = () => {
  const { data } = useGetAllParcelsQuery(undefined);
  const [blockParcel] = useBlockParcelMutation();
  const [unblockParcel] = useUnBlockParcelMutation();

  const handleToggle = async (parcel: IParcelItem) => {
    const action = parcel.isBlocked ? "unblock" : "block";
    const confirmed = window.confirm(
      `Are you sure you want to ${action} parcel ${parcel.trackingId}?`
    );
    if (!confirmed) return;

    try {
      if (parcel.isBlocked) {
        await unblockParcel({ id: parcel._id }).unwrap();
        toast.success(`Parcel ${parcel.trackingId} has been unblocked.`);
      } else {
        await blockParcel({ id: parcel._id }).unwrap();
        toast.success(`Parcel ${parcel.trackingId} has been blocked.`);
      }
    } catch (err: any) {
      console.error(`${action} failed:`, err);
      toast.error(err?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="mt-8 border border-slate-400 rounded-lg shadow">
      <h1 className="text-center py-4 text-xl font-semibold">
        All Parcels ({data?.data?.length || 0})
      </h1>

      <Table>
        <TableHeader className="bg-slate-800 text-white">
          <TableRow>
            <TableHead>Tracking ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Pickup location</TableHead>
            <TableHead>Delivered from</TableHead>
            <TableHead>Delivery Date</TableHead>
            <TableHead>Sender's info</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>isBlocked</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data?.map((parcel: IParcelItem) => (
            <TableRow key={parcel._id}>
              <TableCell>{parcel.trackingId}</TableCell>
              <TableCell>{parcel.type}</TableCell>
              <TableCell>{parcel.weight} kg</TableCell>
              <TableCell>{parcel.fee} ৳</TableCell>
              <TableCell>{parcel.pickupAddress}</TableCell>
              <TableCell>{parcel.deliveryAddress}</TableCell>
              <TableCell>
                {new Date(parcel.deliveryDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <small>
                  Name: {parcel.sender.name}
                  <br />
                  Email: {parcel.sender.email}
                </small>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    parcel.currentStatus === "Requested"
                      ? "bg-yellow-200 text-yellow-800"
                      : parcel.currentStatus === "Delivered"
                      ? "bg-green-200 text-green-800"
                      : parcel.currentStatus === "Cancelled"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {parcel.currentStatus}
                </span>
              </TableCell>

              <TableCell>
                {parcel.isBlocked ? (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-red-200 text-red-800">
                    Yes
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-green-200 text-green-800">
                    No
                  </span>
                )}
              </TableCell>

              <TableCell>
                {parcel?.isBlocked ? (
                  <span> unblock </span>
                ) : (
                  <span> block </span>
                )}

                <Switch
                  checked={!parcel.isBlocked} // switch ON means parcel is active
                  onCheckedChange={() => handleToggle(parcel)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllParcels;
