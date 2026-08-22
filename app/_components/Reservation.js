import {
  getBookedDatesByCabinId,
  getSettings,
} from "@/public/_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-1 border border-primary-800 mt-10 text-accent-400 min-w-[1000px] w-[1300px] mx-auto">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
