import { useState } from "react";
import {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/features/services/services.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Pagination from "@/components/Pagination";
import SkeletonTable from "@/components/provider/SkeletonTable";

const AllServices = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  const [createService] = useCreateServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();

  const [addOpen, setAddOpen] = useState(false);

  const [newService, setNewService] = useState({
    title: "",
    img_url: "",
    description: "",
  });

  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = data?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = data?.data?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handlers

  const handleCreateService = async () => {
    try {
      await createService(newService).unwrap();

      toast.success("Service created successfully");

      setAddOpen(false);
      setNewService({
        title: "",
        img_url: "",
        description: "",
      });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create service");
    }
  };

  const handleEdit = (service: any) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await updateService({
        id: selectedService._id,
        data: {
          title: selectedService.title,
          description: selectedService.description,
          img_url: selectedService.img_url,
        },
      }).unwrap();

      toast.success("Service updated successfully");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Update failed");
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await deleteService(id).unwrap();
      toast.success("Service deleted");
    } catch (err: any) {
      toast.error("Delete failed");
    }
  };

  if (isLoading) return <SkeletonTable />;

  return (
    <div className="mt-8 border rounded-lg shadow">
      <div className="flex justify-around items-center">
        <h1 className="text-center py-4 text-xl font-semibold">
          All Services ({totalItems})
        </h1>

        <Button className="px-15" onClick={() => setAddOpen(true)}>Add a Service + </Button>
      </div>

      <Table>
        <TableHeader className="bg-slate-800 text-white">
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentServices?.map((service: any) => (
            <TableRow key={service._id}>
              <TableCell>{service.title}</TableCell>

              <TableCell>
                <img
                  src={service.img_url}
                  className="w-16 h-12 rounded object-cover"
                />
              </TableCell>

              <TableCell className="line-clamp-2 max-w-xs">
                {service.description}
              </TableCell>

              <TableCell className="space-x-2.5">
                <Button size="sm" onClick={() => handleEdit(service)}>
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </Button>
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

      {/*  Add Service Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Add New Service
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Service Title
              </label>
              <Input
                placeholder="Enter service title"
                value={newService.title}
                onChange={(e) =>
                  setNewService({ ...newService, title: e.target.value })
                }
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Image URL
              </label>
              <Input
                placeholder="https://example.com/image.jpg"
                value={newService.img_url}
                onChange={(e) =>
                  setNewService({ ...newService, img_url: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write service description..."
                value={newService.description}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* Action Button */}
            <Button className="w-full mt-4" onClick={handleCreateService}>
              Add Service
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Update Service Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Update Service
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Service Title
              </label>
              <Input
                placeholder="Enter service title"
                value={selectedService?.title || ""}
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    title: e.target.value,
                  })
                }
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Image URL
              </label>
              <Input
                placeholder="https://example.com/image.jpg"
                value={selectedService?.img_url || ""}
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    img_url: e.target.value,
                  })
                }
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write service description..."
                value={selectedService?.description || ""}
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    description: e.target.value,
                  })
                }
              />
            </div>

            {/* Action Button */}
            <Button className="w-full mt-4" onClick={handleUpdate}>
              Update Service
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllServices;
