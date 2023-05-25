import Badge from "@/components/Badge";

const Nav = (props) => {
  return (
    <nav className="px-4 py-2 font-bold text-lg flex gap-4 items-center">
      {props.result != undefined && (
        <Badge
          text={props.result ? "Result: True" : "Result: False"}
          isTrue={props.result}
        />
      )}
    </nav>
  );
};

export default Nav;
