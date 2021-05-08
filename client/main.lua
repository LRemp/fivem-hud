ESX = nil
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(100)
    end
end)

RegisterNetEvent("esx_status:onTick")
AddEventHandler("esx_status:onTick", function(status)
    TriggerEvent('esx_status:getStatus', 'hunger', function(status)
        food = status.val / 10000
    end)
    TriggerEvent('esx_status:getStatus', 'thirst', function(status)
        thirst = status.val / 10000
    end)
end)

Citizen.CreateThread(function()
    while true do 
        Citizen.Wait(Config['TickTime'])
        if (Config['HideMinimap']) then
            if IsPedSittingInAnyVehicle(PlayerPedId()) then
                DisplayRadar(true)
            else
                DisplayRadar(false)
            end
        else
            DisplayRadar(true)
        end
        SendNUIMessage({
            type = "updateValue",
            values = {
                isShowing = not IsPauseMenuActive(),
                armour = GetPedArmour(PlayerPedId()),
                health = GetEntityHealth(PlayerPedId())-100,
                hunger = food,
                thirst = thirst,
            }
        })
    end
end)

RegisterCommand("hudoff", function(source, args)
    SendNUIMessage({
        type = "toggle",
        value = false
    })
end)

RegisterCommand("hudon", function(source, args)
    SendNUIMessage({
        type = "toggle",
        value = true
    })
end)
