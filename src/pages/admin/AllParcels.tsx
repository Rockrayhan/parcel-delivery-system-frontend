import { useState } from "react";
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
import Pagination from "@/components/Pagination";

const AllParcels = () => {
  const { data } = useGetAllParcelsQuery(undefined);
  const [blockParcel] = useBlockParcelMutation();
  const [unblockParcel] = useUnBlockParcelMutation();

  // --- PAGINATION ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = data?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const parcels = data?.data?.slice(startIndex, endIndex) || [];

  // --- Block/Unblock toggle ---
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
        All Parcels ({parcels.length})
      </h1>

      {/* --- Table --- */}
      <Table>
        <TableHeader className="bg-slate-800 text-white">
          <TableRow>
            <TableHead>Tracking ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>isBlocked</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {parcels.map((parcel: IParcelItem) => (
            <TableRow key={parcel._id}>
              <TableCell>{parcel.trackingId}</TableCell>
              <TableCell>{parcel.type}</TableCell>
              <TableCell>{parcel.weight} kg</TableCell>
              <TableCell>{parcel.fee} ৳</TableCell>
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
                  <span className="text-red-600 font-medium">Yes</span>
                ) : (
                  <span className="text-green-600 font-medium">No</span>
                )}
              </TableCell>
              <TableCell>
                <Switch
                  checked={!parcel.isBlocked}
                  onCheckedChange={() => handleToggle(parcel)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllParcels;
