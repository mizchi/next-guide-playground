import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

// マウント用の HTMLElementを生成
const el = document.createElement("div");
document.body.appendChild(el);

const Index = React.lazy(() => import("./routes/Index"));
const Foo = React.lazy(() => import("./routes/Foo"));

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">
            <a>Index</a>
          </Link>
          |
          <Link to="/foo">
            <a>Foo</a>
          </Link>
        </nav>
      </header>
      <React.Suspense fallback="...">
        <Route exact path="/foo" component={Foo} />
        <Route exact path="/" component={Index} />
      </React.Suspense>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, el);
