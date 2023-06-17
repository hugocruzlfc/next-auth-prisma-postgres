import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
  LoyaltyButton,
} from "@/components/buttons/Buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user/User";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />
          <LoyaltyButton />
        </div>
      </nav>
      <div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      <div>
        <User />
      </div>
    </div>
  );
}
