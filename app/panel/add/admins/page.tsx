import CreateAdminForm from "@/app/ui/admin_users/createForm";
export default async function TechspardhaTeams() {
  return (
    <>
      <div className="bg-gray-900 p-4 shadow-md rounded-md">
        <h1 className="border-b pb-2 text-3xl font-black font-mono border-blue-200">
          Add Techspardha Teams
        </h1>
        <h3 className="text-2xl py-2 font-bold font-mono"> Add Your Team </h3>
        <CreateAdminForm />

        {/* TODO: Update */}
      </div>
    </>
  );
}
