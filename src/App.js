import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Sign from "./pages/sign/sign.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => { console.log(this.state); })
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Sign />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }

}

function Contact() {
  return <h1>Contact under construction !</h1>;
}

function App2() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<None />} />
        <Route path="pc" element={<Pc />} />
        <Route path="elec" element={<Elec />}>
          <Route index element={<None />} />
          <Route path="tv" element={<Tv />} />
          <Route path="pc/*" element={<Pc />} />
        </Route>
        <Route path="meca" element={<Meca />} />
      </Route>
      <Route path="robot" element={<Robot />} />
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="elec">Electronic</Link>
        <Link to="meca">Mecanic</Link>
        <Link to="robot">Robot</Link>
        <Link to="tv">TV Global</Link>
        <Link to="pc">PC Global</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Elec() {
  return (
    <div>
      <h1>Electronic</h1>
      <Link to="tv">TV</Link>
      <Link to="pc">PC</Link>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Meca() {
  return <h1>Mecanic</h1>;
}

function Robot() {
  return <h1>Robots </h1>;
}

function Tv() {
  return <h1>Televisions</h1>;
}

function Pc() {
  return <h1>Personal Computers</h1>;
}

function None() {
  return <h1>None </h1>;
}

function NotFound() {
  return <h1>Not Found </h1>;
}

export default App;
