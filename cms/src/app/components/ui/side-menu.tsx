import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List component="nav">
        <ListItemText primary="Cadastros" />
        <ListItemButton href="/celular-types">
          <ListItemText primary="Tipos de Celulares" />
        </ListItemButton>
        <Divider />
        <ListItemButton href="/celular-factories">
          <ListItemText primary="Fabricantes" />
        </ListItemButton>
        <Divider />
        <ListItemButton href="/celular-models">
          <ListItemText primary="Modelos de Celulares" />
        </ListItemButton>
        <Divider />
        <ListItemButton href="/celulares">
          <ListItemText primary="Celulares" />
        </ListItemButton>
      </List>
    </aside>
  );
}

export default SideMenu;
