const PE_CARD_GROUPS=[PE_DATA.home,...Object.values(PE_DATA.pages)];
PE_CARD_GROUPS.forEach(group=>group?.cards?.forEach(card=>{card.icon=peSvg(card.id)}));
PE_DATA.guideIcons=Object.fromEntries(Object.keys(PE_ICON_PATHS).map(id=>[id,peSvg(id)]));
